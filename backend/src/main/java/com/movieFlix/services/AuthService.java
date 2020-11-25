package com.movieFlix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.movieFlix.entities.User;
import com.movieFlix.repositories.UserRepository;
import com.movieFlix.services.exceptions.ForbiddenException;
import com.movieFlix.services.exceptions.UnauthorizedException;

@Service
public class AuthService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Transactional(readOnly = true)
	public User authenticated() {
		try {
			String userName = SecurityContextHolder.getContext().getAuthentication().getName();
			return userRepository.findByEmail(userName);
		} catch (Exception e) {
			throw new UnauthorizedException("Invalid user");
		}
	}
	
	public void validateMember() {
		User user = authenticated();
		if(!user.hasHole("ROLE_MEMBER")) {
			throw new ForbiddenException("Access denied");
		}
	}

}
