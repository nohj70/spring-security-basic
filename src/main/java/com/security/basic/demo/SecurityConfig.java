package com.security.basic.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public UserDetailsService userDetailsService() throws Exception {
        // ensure the passwords are encoded properly
        User.UserBuilder users = User.withDefaultPasswordEncoder();
        InMemoryUserDetailsManager manager = new InMemoryUserDetailsManager();
        manager.createUser(users.username("asdf").password("asdf").roles("USER").build());
        manager.createUser(users.username("admin").password("password").roles("USER","ADMIN").build());
        return manager;
    }

    @Configuration
    public static class FormLoginWebSecurityConfigurerAdapter extends WebSecurityConfigurerAdapter {

        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http
            .csrf().disable()
            .formLogin(
                formLogin ->
                    formLogin
                    .loginPage("/login").permitAll()
                    .loginProcessingUrl("/autenticar").permitAll()
                    .defaultSuccessUrl("/sample3")
            )
//            .formLogin(Customizer.withDefaults())
            .authorizeRequests(
//
                authorizeRequests ->
                    authorizeRequests
//                    .antMatchers("/web/**", "/*.js", "/web/*.js").permitAll()/
                    .antMatchers("/web/**").permitAll()
                    .anyRequest().authenticated()
            )
            ;
        }
    }

    @Configuration
    @Order(1)
    public static class ApiWebSecurityConfigurationAdapter extends WebSecurityConfigurerAdapter {
        protected void configure(HttpSecurity http) throws Exception {
            http
            .antMatcher("/api/**")
            .authorizeRequests(
                authorizeRequests ->
                    authorizeRequests
                    .anyRequest().hasRole("ADMIN")
            )
            ;
        }
    }


}
