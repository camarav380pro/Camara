// Lista de departamentos y sus ciudades
const departments = {
    "amazonas": ["Leticia", "Puerto Nariño"],
    "antioquia": ["Medellín", "Bello", "Itagüí", "Envigado"],
    "arauca": ["Arauca", "Saravena", "Tame"],
    "atlantico": ["Barranquilla", "Soledad", "Malambo"],
    "bolivar": ["Cartagena", "Magangué", "Turbaco"],
    "boyaca": ["Tunja", "Duitama", "Sogamoso"],
    "caldas": ["Manizales", "Neira", "Chinchiná"],
    "caqueta": ["Florencia", "El Paujil", "San Vicente"],
    "casanare": ["Yopal", "Támara", "Hato Corozal"],
    "cauca": ["Popayán", "Santander de Quilichao", "Puerto Tejada"],
    "cesar": ["Valledupar", "La Paz", "Aguachica"],
    "chocó": ["Quibdó", "Condoto", "Tadó"],
    "córdoba": ["Montería", "Lorica", "Cereté"],
    "cundinamarca": ["Bogotá", "Soacha", "Chía"],
    "guainia": ["Inírida", "Barranco Minas"],
    "guaviare": ["San José del Guaviare", "Miraflores"],
    "huila": ["Neiva", "Pitalito", "La Plata"],
    "la_guajira": ["Riohacha", "Maicao", "Fonseca"],
    "magdalena": ["Santa Marta", "Ciénaga", "El Rodadero"],
    "meta": ["Villavicencio", "Granada", "Acacías","Lejanías","Guamal"],
    "nariño": ["Pasto", "Ipiales", "Tumaco"],
    "norte_de_santander": ["Cúcuta", "Pamplona", "Ocaña"],
    "putumayo": ["Mocoa", "San Francisco", "Puerto Asís"],
    "quindio": ["Armenia", "Circasia", "Salento"],
    "risaralda": ["Pereira", "Dosquebradas", "Santa Rosa"],
    "san_andres": ["San Andrés", "Providencia"],
    "santander": ["Bucaramanga", "Floridablanca", "Barrancabermeja"],
    "sucre": ["Sincelejo", "Corozal", "Sampués"],
    "tolima": ["Ibagué", "Espinal", "Melgar"],
    "valle": ["Cali", "Palmira", "Tuluá"],
    "vaupes": ["Mitú", "Caruru"],
    "vichada": ["Puerto Carreño", "Santa Rosalía"]
};

function filterCities() {
    const departmentSelect = document.getElementById('department');
    const citySelect = document.getElementById('city');
    const selectedDepartment = departmentSelect.value;

    // Limpiar las opciones de la ciudad
    citySelect.innerHTML = '<option value="">-- Seleccionar Ciudad --</option>';

    if (selectedDepartment && departments[selectedDepartment]) {
        const cities = departments[selectedDepartment];

        // Agregar las ciudades correspondientes al departamento seleccionado
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city.toLowerCase();
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
}