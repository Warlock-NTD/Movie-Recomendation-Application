import React from 'react';
import "./tailwind.css";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export const Demo = () => (
    <div className="flex justify-between items-center py-4 bg-blue-900">
        <div className="flex-shrink-0 ml-10 cursor-pointer">
            <i className="fas fa-drafting-compass fa-2x text-orange-500"></i>
            <span className="ml-1 text-3xl text-blue-200 font-semibold">Viblo</span>
        </div>
        <i className="fas fa-bars fa-2x visible md:invisible mr-10 md:mr-0 text-blue-200 cursor-pointer"></i>
        <ul className="hidden md:flex overflow-x-hidden mr-10 font-semibold">
            <li className="mr-6 p-1 border-b-2 border-orange-500">
                <a className="text-blue-200 cursor-default" href="#">Home</a>
            </li>
            <li className="mr-6 p-1">
                <a className="text-white hover:text-blue-300" href="#">Services</a>
            </li>
            <li className="mr-6 p-1">
                <a className="text-white hover:text-blue-300" href="#">Projects</a>
            </li>
            <li className="mr-6 p-1">
                <a className="text-white hover:text-blue-300" href="#">Team</a>
            </li>
            <li className="mr-6 p-1">
                <a className="text-white hover:text-blue-300" href="#">About</a>
            </li>
            <li className="mr-6 p-1">
                <a className="text-white hover:text-blue-300" href="#">Contacts</a>
            </li>
        </ul>
    </div>
);

export const LoginForm = () => (
    <section class="bg-black-1000 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">

                </img>
                Movie Web  
            </a>
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                            </input>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                            </input>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                                    </input>
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                        </div>
                        <button type="submit" class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={clickSignIn}>Sign in</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
);

let refreshToken = localStorage.getItem('refresh');
let accessToken = localStorage.getItem('access');

const clickSignIn = async () => {
    let username = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let payload = 
        {
            username: username,
            password: password
        }
    

    try {
        let response = await axios.post(
            "http://localhost:8000/login", payload, 
            {
                    headers: {
                    'Authorization': 'Bearer ${refreshToken}'
                }
            }
            
        )
        //window.alert(response.data.ref)
        console.log(response.data)
        refreshToken = response.data.refresh;
        // let accessToken = response.data.access;
        window.alert(refreshToken)
        window.alert(accessToken)
        
    } catch (error) {
        //window.alert("failed")
        window.alert(error)
        //console.log("login failed")
        console.log(error)
    }

};


