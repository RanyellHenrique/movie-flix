INSERT INTO tb_user (name, email, password) VALUES ('Alex Brown', 'alex@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Bob Brown', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBER');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_genre (name) VALUES ('Drama');
INSERT INTO tb_genre (name) VALUES ('Aventura');
INSERT INTO tb_genre (name) VALUES ('Açâo');

INSERT INTO tb_movie (genre_id, title, sub_Title, year, img_Uri, synopsis) VALUES (1, 'Coringa', 'Coloque um sorriso nessa cara.', 2019, 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/rNqVp7C3ajnxxe6n2151mG8Ttck.jpg','Arthur Fleck trabalha como palhaço para uma agência de talentos e, toda semana, precisa comparecer a uma agente social, devido aos seus conhecidos problemas mentais. Após ser demitido, Fleck reage mal à gozação de três homens em pleno metrô e os mata. Os assassinatos iniciam um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante.');            
INSERT INTO tb_movie (genre_id, title, sub_Title, year, img_Uri, synopsis) VALUES (3, 'The Silencing', 'The silencing.', 2020, 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/lviaLi9G9SAeRnp0H8LJubEVTAS.jpg','Um caçador aposentado vive isolado em um santuário de vida selvagem se envolve em um jogo mortal de gato e rato quando ele e o xerife local partem para rastrear um assassino cruel que pode ter sequestrado sua filha anos atrás.');                