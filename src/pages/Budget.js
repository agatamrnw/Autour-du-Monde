import React from 'react';
import styled from 'styled-components';

const Budget = () =>{

    return(
        <Container>
      <Content>
        <Image src='/assets/piggy-bank.jpeg'/>
        <Section className='item1'>
          <Title>Budget Travel Tips</Title>
          <p>Are you dreaming of exploring the world but worried about breaking the bank? Fear not! Traveling on a budget doesn't mean sacrificing experiences or settling for less. With a bit of planning and creativity, you can embark on unforgettable adventures without emptying your wallet. Here are some top tips for making the most of your travel budget:</p>
        </Section>
        <Section className='item2'>
          <ol>
            <li>
            <h2>Set a Realistic Budget:</h2>
            <p>Before you start planning your trip, take some time to evaluate your finances and set a realistic budget. Consider your income, expenses, and any savings you have set aside for travel. Determine how much you can afford to spend on transportation, accommodation, food, activities, and other expenses.</p>
            </li>
            <li>
            <h2>Travel Off-Peak:</h2>
            <p>Traveling during off-peak seasons can save you a significant amount of money on flights, accommodation, and attractions. Research the shoulder seasons or low seasons for your destination and plan your trip accordingly. Not only will you save money, but you'll also avoid crowds and enjoy a more authentic experience.</p>
            </li>
            <li>
            <h2> Be Flexible with Dates and Destinations:</h2>
            <p>Flexibility is key to finding budget-friendly travel options. Be open to traveling to destinations that are less popular or off the beaten path. Use flexible date search tools to find the cheapest flights and consider alternative airports or nearby cities for even greater savings.</p>
            </li>
            <li>
            <h2>Opt for Budget Accommodation:</h2>
            <p>Accommodation costs can quickly eat into your travel budget, but there are plenty of affordable options available. Consider staying in hostels, guesthouses, or budget hotels instead of luxury resorts. You can also explore alternative accommodation options like Airbnb or Couchsurfing for unique and budget-friendly experiences.</p>
            </li>
            <li>
            <h2>Cook Your Own Meals:</h2>
            <p>Eating out every meal can add up quickly, especially in touristy areas. Save money by cooking your own meals whenever possible. Look for accommodation with kitchen facilities or communal kitchens where you can prepare your own food. Visit local markets and grocery stores to stock up on fresh ingredients and enjoy budget-friendly meals.</p>
            </li>
            <li>
            <h2>Use Public Transportation:</h2>
            <p>Public transportation is often much cheaper than taxis or rental cars, especially in cities with extensive transit networks. Research the public transportation options available at your destination and take advantage of passes or discounts for tourists. Walking or cycling are also great ways to explore a new city while saving money on transportation.</p>
            </li>
            <li>
            <h2>Seek Out Free Activities:</h2>
            <p>You don't need to spend a fortune to have fun while traveling. Many destinations offer free or low-cost activities and attractions that allow you to immerse yourself in the local culture without breaking the bank. Visit museums on free admission days, explore public parks and gardens, or join walking tours led by local volunteers.</p>
            </li>
            <li>
            <h2>Travel Light and Avoid Extra Fees:</h2>
            <p>Packing light not only saves you time and hassle but also helps you avoid costly baggage fees. Pack only the essentials and consider investing in a lightweight carry-on bag to avoid checked baggage fees. Be mindful of airline policies regarding luggage size and weight to avoid unexpected charges.</p>
            </li>
            <li>
            <h2>Take Advantage of Rewards Programs and Discounts:</h2>
            <p>Sign up for airline and hotel rewards programs to earn points or miles that can be redeemed for free flights, accommodation, or upgrades. Look for discounts and promotions offered by travel companies, tour operators, and attractions. Student, youth, and senior discounts may also be available for certain activities and services.</p>
            
            </li>
            <li>
            <h2>Plan Ahead and Research Thoroughly:</h2>
            <p>Last-minute bookings can be expensive, so plan your trip well in advance to take advantage of the best deals. Research your destination thoroughly to find budget-friendly accommodations, transportation options, and activities. Read reviews, compare prices, and look for discounts or special offers before making any reservations.</p>
            </li>
          </ol>
          
        </Section>
        <Section className='item3'>
        <h2>Conclusion:</h2>
        <p>Traveling on a budget is not only possible but also incredibly rewarding. By following these budget tips and being mindful of your spending, you can enjoy amazing adventures and create lifelong memories without breaking the bank. With a little creativity and planning, the world is yours to explore, no matter your budget. So pack your bags, embrace the adventure, and get ready for the trip of a lifetime!</p>
        </Section>
      </Content>
    </Container>
  );
};

export default Budget;

const Container = styled.div`
  
  margin: auto;
  margin-top: 48px;
  margin-bottom: 96px;
  padding: 24px;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    cursor: pointer;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-template-rows: auto auto auto auto auto;
  gap: 40px;
  padding-top: 0;
  
  font-family: 'Chivo', sans-serif;
  font-weight: 200;

  h2, h3 {
    font-weight: 400;
    margin-top:0;
  }
  p{
    line-height: 120%;
  }
  .item1 {
    grid-column: 3 / span 1;
    grid-row: 1 / span 1;
  }

  .item2 {
    grid-column: 1 / span 3;
    grid-row: 3 / span 1;
  }
  .item3 {
    grid-column: 1 / span 3;
    grid-row: 4 / span 1;
  }
  

 
`;

const Section = styled.div`
  padding: 0;
  li{
    margin-bottom: 12px;
  }
`;

const Image = styled.img`
  width: 100%;
  grid-column: 1 / span 2;
  grid-row: 1 / span 1;
`;

const Title = styled.h1`
  margin-top: 0;
  font-family: 'Cinzel', serif;
  font-size: 40px;
  font-weight: normal;
  letter-spacing: 0.3rem;
`;
    

