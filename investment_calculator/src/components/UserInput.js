
const UserInput = ({ inputs, handleUserInput }) => {

  return (
    <section id='user-input'>
        <div className='input-group'>
            <p>
                <label>Initial Investment</label>
                <input 
                    type="number" 
                    value={inputs.initialInvestment} 
                    onChange={(event) => handleUserInput('initialInvestment', event.target.value)} 
                    required 
                />
            </p>
            <p>
                <label>Annual Investment</label>
                <input 
                    type="number" 
                    value={inputs.annualInvestment} 
                    onChange={(event) => handleUserInput('annualInvestment', event.target.value)} 
                    required 
                />
            </p>
        </div>
        <div className='input-group'>
            <p>
                <label>Expected Return</label>
                <input 
                    type="number" 
                    value={inputs.expectedReturn} 
                    onChange={(event) => handleUserInput('expectedReturn', event.target.value)} 
                    required 
                />
            </p>
            <p>
                <label>Duration</label>
                <input 
                    type="number" 
                    value={inputs.duration} 
                    onChange={(event) => handleUserInput('duration', event.target.value)} 
                    required 
                />
            </p>
        </div>
    </section>
  )
}

export default UserInput