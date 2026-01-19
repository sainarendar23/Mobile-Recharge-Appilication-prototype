package com.example.airjio.service;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.airjio.config.JwtService;
import com.example.airjio.controller.AuthenticationRequest;
import com.example.airjio.controller.AuthenticationResponse;
import com.example.airjio.controller.RegisterRequest;
import com.example.airjio.entity.Role;
import com.example.airjio.entity.UserInfo;
import com.example.airjio.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    public AuthenticationResponse register(RegisterRequest request){
        var user = UserInfo.builder()
                .mobile(request.getMobile())
                .network(request.getNetwork())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        userRepository.save(user);
        var jwtToken =  jwtService.generateToken(user);
        return AuthenticationResponse.builder()
            .token(jwtToken)
            .build();
    }

    public AuthenticationResponse  authenticate(AuthenticationRequest request){
         authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken( 
                request.getMobile(),
                request.getPassword()
            )
         );
         var user = userRepository.findByMobile(request.getMobile())
                .orElseThrow();
                var jwtToken =  jwtService.generateToken(user);
                return AuthenticationResponse.builder()
                    .token(jwtToken)
                    .role(user.getRole())
                    .build();
    }
}
