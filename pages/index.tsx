import React from "react";
import Header from "../components/Header";
import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Particles from "react-tsparticles";

function HParicles() {
	return (
		<Particles
			id="tsparticles"
			options={{
				fpsLimit: 120,
				interactivity: {
					events: {
						onClick: {
							enable: true,
							mode: "push",
						},
						resize: true,
					},
					modes: {
						bubble: {
							distance: 400,
							duration: 2,
							opacity: 0.8,
							size: 40,
						},
						push: {
							quantity: 4,
						},
						repulse: {
							distance: 200,
							duration: 0.4,
						},
					},
				},
				particles: {
					color: {
						value: "#4f46e5",
					},
					links: {
						color: "#4f46e5",
						distance: 150,
						enable: true,
						opacity: 0.2,
						width: 1,
					},
					collisions: {
						enable: true,
					},
					move: {
						direction: "none",
						enable: true,
						outMode: "bounce",
						random: false,
						speed: 2,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 80000,
						},
						value: 80,
					},
					opacity: {
						value: 0.1,
					},
					shape: {
						type: "circle",
					},
					size: {
						random: true,
						value: 5,
					},
				},
				detectRetina: true,
			}}
		/>
	);
}

function Home() {
	const { user, error, isLoading } = useUser();
	return (
		<>
			<Head>
				<title>Devenv - the note taking app for devs</title>
			</Head>
			<Header></Header>

			<style jsx>{`
				.header_hero {
					min-height: 80vh;
					overflow: hidden;
					position: relative;
				}
			`}</style>

			<div className="flex flex-col items-center justify-center header_hero">
				<HParicles />
				<h1 className="text-5xl shorter">
					The note taking app for{" "}
					<span className="text-indigo-600 font-semibold">Developers</span>
				</h1>
				<p className="mt-4 text-gray-600">
					Say no no to Googling the same code over and over again
				</p>
				<div className="flex">
					{!user && (
						<a
							href="/api/login"
							className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 mt-4 rounded-full"
						>
							Sign up
						</a>
					)}
					{user && (
						<a
							href="/home"
							className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 mt-4 rounded-full"
						>
							Open dashboard
						</a>
					)}
				</div>
			</div>

			<div className="max-w-xl m-auto">
				<h2 className="text-center text-2xl font-bold mt-4">Why Devenv?</h2>
				<p className="text-center text-gray-600">
					Devenv is a note taking app for developers. It's a place where you can
					write down your notes and keep them organized. And the cool thing is,
					you can share your notes with the world. And other developers like you
					can use it.
				</p>
			</div>
		</>
	);
}
export default Home;
