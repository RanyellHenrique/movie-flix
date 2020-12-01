package com.movieFlix.tests.web.it;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.movieFlix.dto.ReviewDTO;
import com.movieFlix.repositories.ReviewRepository;
import com.movieFlix.tests.web.utils.AuthenticationUtil;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
public class ReviewResourceIT {

	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private ObjectMapper objectMapper;
	
	@Autowired
	private AuthenticationUtil authenticationUtil;
	
	@Autowired
	private ReviewRepository reviewRepository;
	
	private ReviewDTO newReviewDTO;
	private String visitorUsername;
	private String visitorPassword;
	private String memberUsername;
	private String memberPassword;
	
	@BeforeEach
	void setUp() throws Exception {
		
		visitorUsername = "bob@gmail.com";
		visitorPassword = "123456";
		memberUsername = "ana@gmail.com";
		memberPassword = "123456";
		
		newReviewDTO = new ReviewDTO();
		newReviewDTO.setText("Good good good");
		newReviewDTO.setMovieId(1L);
	}

	@Test
	public void insertShouldReturnUnauthorizedWhenNotValidToken() throws Exception {

		String jsonBody = objectMapper.writeValueAsString(newReviewDTO);
		
		ResultActions result =
				mockMvc.perform(post("/reviews")
						.content(jsonBody)
						.contentType(MediaType.APPLICATION_JSON)
						.accept(MediaType.APPLICATION_JSON));

		result.andExpect(status().isUnauthorized());
	}
	
	@Test
	public void insertShouldReturnForbiddenWhenVisitorAuthenticated() throws Exception {
	
		String accessToken = authenticationUtil.obtainAccessToken(visitorUsername, visitorPassword);
		
		String jsonBody = objectMapper.writeValueAsString(newReviewDTO);
		
		ResultActions result =
				mockMvc.perform(post("/reviews")
						.header("Authorization", "Bearer " + accessToken)
						.content(jsonBody)
						.contentType(MediaType.APPLICATION_JSON)
						.accept(MediaType.APPLICATION_JSON));

		result.andExpect(status().isForbidden());
	}
	
	@Test
	public void insertShouldInsertReviewWhenMemberAuthenticatedAndValidData() throws Exception {
		
		String accessToken = authenticationUtil.obtainAccessToken(memberUsername, memberPassword);
		
		String jsonBody = objectMapper.writeValueAsString(newReviewDTO);
		
		long expectedCount = reviewRepository.count() + 1;
		
		ResultActions result =
				mockMvc.perform(post("/reviews")
						.header("Authorization", "Bearer " + accessToken)
						.content(jsonBody)
						.contentType(MediaType.APPLICATION_JSON)
						.accept(MediaType.APPLICATION_JSON));
		
		result.andExpect(status().isCreated());
		result.andExpect(jsonPath("$.user").exists());
		result.andExpect(jsonPath("$.user.id").exists());
		result.andExpect(jsonPath("$.user.name").exists());
		result.andExpect(jsonPath("$.user.email").value(memberUsername));
		Assertions.assertEquals(expectedCount, reviewRepository.count());
	}

	@Test
	public void insertShouldReturnUnproccessableEntityWhenMemberAuthenticatedAndInvalidData() throws Exception {
		
		String accessToken = authenticationUtil.obtainAccessToken(memberUsername, memberPassword);
		
		newReviewDTO.setText("     ");
		String jsonBody = objectMapper.writeValueAsString(newReviewDTO);
		
		ResultActions result =
				mockMvc.perform(post("/reviews")
						.header("Authorization", "Bearer " + accessToken)
						.content(jsonBody)
						.contentType(MediaType.APPLICATION_JSON)
						.accept(MediaType.APPLICATION_JSON));

		result.andExpect(status().isUnprocessableEntity());
	}
}
