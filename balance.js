function Balance() {
    const currentUserCtx = React.useContext(currentUserContext);

    const [deposit, setDeposit] = React.useState();
    const [amount, setAmount] = React.useState("");
    const ctx = React.useContext(UserContext);

    

        function getBalance() {
            console.log(`this is the balance: ${amount}`);
            return ctx.users[currentUserCtx.index].balance;
            
        }
        function getUser() {
            return ctx.users[currentUserCtx.index].name;
        }


        

        return (
            <Card
                header="Balance" 
                cardWidth='45%'
                bgcolor="info"
                txtcolor="white"
                bodyContainerWidth='500px'
        
                body={currentUserCtx.loginStatus ? (
                <>
                    <br/>
                        <div >
                            <h1>Welcome: {getUser()}</h1>
                            <br/>
                            <h1>Balance: ${getBalance()}</h1>
                            
                        </div>
                    <br/>
                           
                </>
            ):(
                <div>
                    <h2>LOGIN TO USE FEATURE!</h2>
                    <h2>THANKS</h2>
                </div>
            )
            }
            />
        );
}
