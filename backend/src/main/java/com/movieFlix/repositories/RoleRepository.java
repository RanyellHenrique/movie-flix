package com.movieFlix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movieFlix.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

}
