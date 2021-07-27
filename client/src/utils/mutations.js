import { gql } from '@apollo/client'

export const LOGIN = gql`
    mutation login(email: Sring!, password: Sring!) {
        login(email: $email, password: $password){
           token
           user 
        }
    }
`