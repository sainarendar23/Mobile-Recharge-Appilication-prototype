package com.example.airjio.entity;

import java.util.Collection;
import java.util.List;



import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data
@Builder
@Table(name="_user_info")
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(value = {"authorities", "tokens", "credentialsNonExpired", "enabled", "accountNonExpired","username","accountNonLocked"}) 
public class UserInfo implements UserDetails{
    @Id
    @Column(length = 12, nullable = false, unique = true)
    private String mobile;
    private String password;
    private String network;
    @Enumerated(EnumType.STRING)
    private Role role;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return role.getAuthorities();
    }
    @Override
    public String getUsername() {
        return mobile;
    }
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
    @Override
    public boolean isEnabled() {
        return true;
    }
    @Override
    public String getPassword() {
        return password;
    }
    @OneToMany(mappedBy = "userInfo")
    private List<Token> tokens;
}
