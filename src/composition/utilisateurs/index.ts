enum Role {
    ROLE_ADMIN = 'ROLE_ADMIN',
    ROLE_MODERATEUR = 'ROLE_MODERATEUR'
}

export interface Utilisateur {
    id: number | null;
    username: string | null;
    email: string | null;
    role: Role[];
    password: string | null;
}

