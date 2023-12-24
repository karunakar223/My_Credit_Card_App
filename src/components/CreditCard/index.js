// Write your code here
import {useState} from 'react'
import {
  HomeContainer,
  CreditCardContainer,
  CardHeaderContainer,
  Card,
  CardHeader,
  Underline,
  CardNumber,
  CardHolderCaption,
  CardHolderName,
  CreditCardDetails,
  DetailsCard,
  DetailsHeader,
  InputHolderNumber,
  InputHolderName,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')

  const onChangeNumber = event => setCardNumber(event.target.value)

  const onChangeName = event => setCardHolderName(event.target.value)

  return (
    <HomeContainer>
      <CreditCardContainer>
        <CardHeaderContainer>
          <CardHeader>CREDIT CARD</CardHeader>
          <Underline />
        </CardHeaderContainer>
        <Card data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <CardHolderCaption>CARDHOLDER NAME</CardHolderCaption>
          <CardHolderName>{cardHolderName.toUpperCase()}</CardHolderName>
        </Card>
      </CreditCardContainer>
      <CreditCardDetails>
        <DetailsCard>
          <DetailsHeader>Payment Method</DetailsHeader>
          <InputHolderNumber
            type="text"
            onChange={onChangeNumber}
            placeholder="Card Number"
          />
          <InputHolderName
            type="text"
            onChange={onChangeName}
            placeholder="Cardholder Name"
          />
        </DetailsCard>
      </CreditCardDetails>
    </HomeContainer>
  )
}

export default CreditCard
