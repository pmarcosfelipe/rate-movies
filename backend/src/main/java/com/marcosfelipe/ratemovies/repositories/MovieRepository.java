package com.marcosfelipe.ratemovies.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.marcosfelipe.ratemovies.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{}
