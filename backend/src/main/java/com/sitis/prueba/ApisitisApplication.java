package com.sitis.prueba;

import com.sitis.prueba.entities.Profile;
import com.sitis.prueba.repositories.ProfileRepository;
import com.sitis.prueba.services.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class ApisitisApplication {



	public static void main(String[] args) {

		ApplicationContext context = SpringApplication.run(ApisitisApplication.class, args);

		ProfileRepository repository = context.getBean(ProfileRepository.class);
		repository.save(new Profile("Administrativo"));
		repository.save(new Profile("Coordinador"));
		repository.save(new Profile("Invitado"));

	}
	@Bean
	public WebMvcConfigurer corsConfigurer(){
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOrigins("http://localhost:4200");
			}
		};
	}

}
