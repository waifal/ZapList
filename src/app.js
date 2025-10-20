"use strict";

// Web Components
import './components/Navbar.js';        // Navbar
import './components/Header.js';        // Header
import './components/Card.js';          // Card

document.addEventListener('DOMContentLoaded', function () {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (xhr.status !== 200) {
            console.error(`Failed to fetch template: ${xhr.statusText}`);
            return;
        }

        try {
            const data = xhr.responseText;
            document.getElementById('app').innerHTML = data;
        } catch (error) {
            console.error('Failed to initialize template: ', error);
        }
    }
    
    xhr.onerror = function () {
        console.error('Network error or failed to fetch template.');
    };

    xhr.open('GET', '/src/template/home.html', true);
    xhr.send(null);
});