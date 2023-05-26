import axios, { AxiosResponse, AxiosError } from "axios"

export const check = async (email: string, password: string) => {
    try {
        const response: AxiosResponse = await axios.post('http://localhost:8000/signin', {
            email,
            password
        })

        localStorage.setItem('token', response.data.token)
        return { status: true }
    } catch (err) {
        const error = err as AxiosError
        return error.response?.data
    }
}