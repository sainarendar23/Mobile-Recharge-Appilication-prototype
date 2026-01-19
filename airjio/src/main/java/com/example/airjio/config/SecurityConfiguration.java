package com.example.airjio.config;

import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.example.airjio.entity.Permission;
import com.example.airjio.entity.Role;
import com.example.airjio.service.MyConstant;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {
        private final JwtAuthenticationFilter JwtAuthFilter;
        private final AuthenticationProvider authenticationProvider;

        @Bean
        public org.springframework.security.web.SecurityFilterChain SecurityFilterChain(HttpSecurity http)
                        throws Exception {
                http
                                .csrf(csrf -> csrf
                                                .disable())
                                .authorizeHttpRequests(authorize -> authorize.requestMatchers(MyConstant.WHITELIST_URL)
                                                .permitAll()

                                                .requestMatchers("/api/airjio/user/**")
                                                .hasAnyRole(Role.ADMIN.name(), Role.USER.name())

                                                .requestMatchers(GET, "/api/airjio/user/**")
                                                .hasAnyAuthority(Permission.ADMIN_CREATE.name(),
                                                                Permission.USER_CREATE.name())
                                                .requestMatchers(POST, "/api/airjio/user/**")
                                                .hasAnyAuthority(Permission.ADMIN_READ.name(),
                                                                Permission.USER_READ.name())
                                                .requestMatchers(PUT, "/api/airjio/user/**")
                                                .hasAnyAuthority(Permission.ADMIN_UPDATE.name(),
                                                                Permission.USER_UPDATE.name())
                                                .requestMatchers(DELETE, "/api/airjio/user/**")
                                                .hasAnyAuthority(Permission.ADMIN_DELETE.name(),
                                                                Permission.USER_DELETE.name())

                                                .requestMatchers("/api/airjio/admin/**").hasAnyRole(Role.ADMIN.name())

                                                .requestMatchers(GET, "/api/airjio/admin/**")
                                                .hasAnyAuthority(Permission.ADMIN_CREATE.name())
                                                .requestMatchers(POST, "/api/airjio/admin/**")
                                                .hasAnyAuthority(Permission.ADMIN_READ.name())
                                                .requestMatchers(PUT, "/api/airjio/admin/**")
                                                .hasAnyAuthority(Permission.ADMIN_UPDATE.name())
                                                .requestMatchers(DELETE, "/api/airjio/admin/**")
                                                .hasAnyAuthority(Permission.ADMIN_DELETE.name())

                                                .anyRequest()
                                                .authenticated())
                                .sessionManagement(management -> management
                                                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                                .authenticationProvider(authenticationProvider)
                                .addFilterBefore(JwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                                .cors(cors -> cors.configurationSource(corsConfigurationSource()));
                return http.build();
        }

        @Bean
        public org.springframework.web.cors.CorsConfigurationSource corsConfigurationSource() {
                org.springframework.web.cors.CorsConfiguration configuration = new org.springframework.web.cors.CorsConfiguration();
                configuration.setAllowedOrigins(MyConstant.ORIGINS);
                configuration.setAllowedMethods(MyConstant.METHODS);
                configuration.setAllowedHeaders(MyConstant.HEADERS);
                org.springframework.web.cors.UrlBasedCorsConfigurationSource source = new org.springframework.web.cors.UrlBasedCorsConfigurationSource();
                source.registerCorsConfiguration("/**", configuration);
                return source;
        }

}