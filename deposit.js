function Deposit() {
    const currentUserCtx = React.useContext(currentUserContext);

    const [isValid, setisValid] = React.useState(false);
    const [isDepositSuccess, setisDepositSuccess] = React.useState(false);


    const [amount, setAmount] = React.useState(0);
    const ctx = React.useContext(UserContext);

    

        function getBalance() {
            //setAmount(ctx.users[currentUserCtx.index].balance);
            console.log(`this is the balance: ${amount}`);
            return ctx.users[currentUserCtx.index].balance;
            
        }

        function getDate() {
            return Date();
        }

        function checkInputParams(inputParm){

            if (checkIfLessThanZero(inputParm) && checkIsNumber(inputParm)){
                console.log("input parms true")                
                return true;
            }
            else{
                console.log("input parms false")                
                return false;

            }
                
        }


        function checkIfLessThanZero(myInput){
                if (myInput < 0){
                    alert("please enter a number > 0");
                    return false;
                }
                else{
                    return true;
                }
        }
        
        function checkIsNumber(value) {
            console.log("This is value:"+value);
            
            if (isNaN(value)){
                
                alert("please enter a number!");
                return false;
            }
            else
            {
                return true;
            }
            
          }

        const handleDeposit = (e) => {

            console.log(`this is new balance: ${amount}`);
            //alert(`Deposit of $${amount} completed!`);
            ctx.users[currentUserCtx.index].balance = ctx.users[currentUserCtx.index].balance + amount;
            ctx.users[currentUserCtx.index].history.push(getDate(),"-  Deposit of $",amount,<br/>);
            
            setAmount(0);
            setisDepositSuccess(true);
        };

        const handleOk = (e) => {
            
            setisDepositSuccess(false);
        };


        const handleChange = (e) => {
            
            console.log(`This is setAmount: ${amount}`);
            
                if (!(checkInputParams(e.target.value))) {
                    
                    (e.target.value) = 0;
                    
                    setisValid(false);
                    
                }
                else{
                    setisValid(true);
                }
        
                setAmount(Number(e.target.value));
              
          };
        

        return (
            <Card 
                header="Deposit"
                cardWidth='45%'
                bgcolor="info"
                txtcolor="white"
                bodyContainerWidth='500px'
        
                body={currentUserCtx.loginStatus ? (
                    isDepositSuccess ? (
                    <>
                        <h2>Deposit Success!</h2>
                        <button onClick={handleOk} className="btn btn-light" type="submit">
                            Continue...
                        </button>
                    <h2></h2>
                    </>):(
                    <>  
                    <br/>
                        <div >
                            <h1>Balance: ${getBalance()}</h1>
                        </div>
                        <br/>
                        <div>
                            <input
                            onChange={handleChange}
                            value={amount}  
                            type="text"
                            id="amount"
                            className="form-control"
                            placeholder="Deposit Amount..."
                            />
                        </div>
                        <br/>
                        <div>
                            <button disabled={!isValid} onClick={handleDeposit} className="btn btn-light" type="submit">
                            Deposit
                            </button>    
                        </div>
                      </>)
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
