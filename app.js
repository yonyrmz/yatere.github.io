particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80, // Cambia la cantidad de partículas
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#888888" // Cambia el color de las partículas a gris (#888888)
        },
        "shape": {
            "type": "circle", // Cambia la forma de las partículas (en este caso, círculos)
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
        },
        "opacity": {
            "value": 0.7, // Cambia la opacidad de las partículas
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 5, // Cambia el tamaño de las partículas
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#888888", // Cambia el color de las líneas que conectan las partículas a gris (#888888)
            "opacity": 0.5, // Cambia la opacidad de las líneas
            "width": 2 // Cambia el ancho de las líneas
        },
        "move": {
            "enable": true,
            "speed": 4, // Cambia la velocidad de las partículas
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true, // Hace que las partículas sigan al puntero del mouse
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse" // Cambia el modo a "repulse" para que las partículas reaccionen al puntero del mouse
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
