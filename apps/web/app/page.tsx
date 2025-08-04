"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  REQUEST_BASE_URL,
  API_KEY,
  IMAGE_TMDB_BASE_URL,
} from "../app/utils/constants";

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
}

const fetchPopularMovies = async (apiKey: string): Promise<Movie[]> => {
  try {
    const response = await fetch(
      `${REQUEST_BASE_URL}/movie/popular?api_key=${apiKey}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch popular movies");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  console.log("Movies length:", movies.length);

  useEffect(() => {
    if (!API_KEY) {
      console.warn("TMDB API key is missing");
      return;
    }
    fetchPopularMovies(API_KEY).then(setMovies);
  }, []);

  return (
    <main className="p-4">
        <h1 className="text-2xl font-bold text-center p-2">
          🎬 Popular Movies
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <Link key={movie.id} href={`/movie/${movie.id}`} className="block">
              <div className="border rounded-lg">
                <Image
                  src={`${IMAGE_TMDB_BASE_URL}/w500/${movie.poster_path}`}
                  alt={movie.title}
                  width={250}
                  height={350}
                  loading="lazy"
                  unoptimized
                />
                <p className="p-2 text-center">{movie.title}</p>
              </div>
            </Link>
          ))}
        </div>
        {movies.length === 0 && (
          <p className="text-center text-gray-500">No popular movies found.</p>
        )}
        <p className="text-center text-sm text-gray-500 mt-4">
          Powered by <a href="https://www.themoviedb.org/" className="text-blue-500">TMDB</a>
        </p>
       
    </main>
  );
}
