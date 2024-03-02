function volume_sphere() {
    //Write your code here
	  event.preventDefault();

    // Get the radius input value
    var radius = document.getElementById('radius').value;

    // Calculate the volume of the sphere
    var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Update the volume input value
    document.getElementById('volume').value = volume.toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
