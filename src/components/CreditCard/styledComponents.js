// Style your elements here
import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
`

export const CreditCardContainer = styled.div`
  width: 50%;
  height: 100vh;
  background-color: #3b4b69;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const Card = styled.div`
  height: 50%;
  width: 90%;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 3rem;
  border-radius: 24px;
`
export const CardHeaderContainer = styled.div``
export const CardHeader = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 2rem;
  font-weight: 900;
`
export const Underline = styled.hr`
  border: 2px solid #ffd773;
`
export const CardNumber = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 2rem;
  font-weight: 500;
`
export const CardHolderCaption = styled.p`
  color: #d3d9e0;
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: 400;
`
export const CardHolderName = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: 500;
`
export const CreditCardDetails = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const DetailsCard = styled.div`
  height: 50%;
  width: 90%;
  padding: 2rem;
  box-shadow: 5px 5px 5px 6px #d3d9e0;
`
export const DetailsHeader = styled.h1`
  color: #344e7a;
  font-family: 'Roboto';
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
`
export const InputHolderNumber = styled.input`
  height: 40px;
  width: 100%;
  border: 2px solid #c3cad9;
  border-radius: 6px;
  color: #475569;
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: 400;
  padding-left: 12px;
  margin-bottom: 20px;
  outline: none;
`
export const InputHolderName = styled.input`
  height: 40px;
  width: 100%;
  border: 2px solid #c3cad9;
  border-radius: 6px;
  color: #475569;
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: 400;
  padding-left: 12px;
  outline: none;
`
