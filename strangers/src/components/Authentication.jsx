import { useState } from "react";

export default function Authentication({buttonText, handleSubmit}){ 
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
    {
    return (
            < form onSubmit={(e)=>handleSubmit(e,username, password)}>
                <label htmlFor="username">Username</label>
                <input type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="text"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">{buttonText}</button>
            </form >
        )
}
}
