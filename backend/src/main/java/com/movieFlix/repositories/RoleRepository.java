package com.movieFlix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.movieFlix.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

}
