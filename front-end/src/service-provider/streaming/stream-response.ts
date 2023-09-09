import axios from "axios";

export const streamResponse = async () => {
    try {
        const results = await axios.post('http://localhost:5000/');
        if (results) {
            return results.data
        }

    } catch (error) {
        return { error }
    }

}