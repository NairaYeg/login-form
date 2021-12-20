export default function Form({ handleSetUserName, handleSetPass, handleSubmit }) {


    return (<form>
        <input
            type="text"
            placeholder="UserName"
            onChange={handleSetUserName}
        />
        <br />
        <input
            type="password"
            placeholder="Password"
            onChange={handleSetPass}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
    </form>
    )

}