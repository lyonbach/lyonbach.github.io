#version 330 core

in vec3 FragPos;
in vec3 Normal;

out vec4 FragColor;

uniform vec3 lightDir;    // Direction to light (normalized)
uniform vec3 lightColor;
uniform vec3 objectColor;

void main()
{
    // Normalize the interpolated normal
    vec3 norm = normalize(Normal);
    
    // Calculate basic diffuse lighting
    float lightIntensity = max(dot(norm, -lightDir), 0.0);

    // Quantize the light into bands (tune the thresholds as needed)
    float intensity;
    if (lightIntensity > 0.95)
        intensity = 1.0;
    else if (lightIntensity > 0.5)
        intensity = 0.7;
    else if (lightIntensity > 0.25)
        intensity = 0.4;
    else
        intensity = 0.1;

    vec3 color = intensity * lightColor * objectColor;

    FragColor = vec4(color, 1.0);
}
