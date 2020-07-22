import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';

import Closinglist from "./components/deals/closinglist/closinglist"
import Header from "./components/header/header"
import Explorelist from "./components/deals/explorelist/explorelist"
import ImageList from "./components/buildingcards/imagelist"
import Alllist from "./components/deals/alldeals/alllist"

const closing=[
  {
  countryname:"China",
  address:"adas",
  building:"Burjul khalifa",
},
{
  countryname:"Austrailia",
  address:"sydney",
  building:"Burjul Arab",
},
{
  countryname:"Japan",
  address:"Tokyo",
  building:"Eifel Tower",
},]

const all=[
  {
  countryname:"China",
  address:"adas",
  building:"Burjul khalifa",
},
{
  countryname:"Austrailia",
  address:"sydney",
  building:"Burjul Arab",
},
{
  countryname:"Japan",
  address:"Tokyo",
  building:"Eifel Tower",
},
{
  countryname:"Japan",
  address:"Tokyo",
  building:"Eifel Tower",
},
{
  countryname:"Japan",
  address:"Tokyo",
  building:"Eifel Tower",
},
{
  countryname:"Japan",
  address:"Tokyo",
  building:"Eifel Tower",
},]

const country=[

  {
    name:"UK",
    properties:110,
  },
  {
    name:"Germany",
    properties:220,
  },
  {
    name:"Austrailia",
    properties:130,
  },
]

const Closed=[
  {
  countryname:"China",
  address:"adas",
  building:"Burjul khalifa",
},
{
  countryname:"Austrailia",
  address:"sydney",
  building:"Burjul Arab",
},
{
  countryname:"Japan",
  address:"Tokyo",
  building:"Eifel Tower",
},
{
  countryname:"China",
  address:"adas",
  building:"Burjul khalifa",
},
{
  countryname:"Austrailia",
  address:"sydney",
  building:"Burjul Arab",
},
{
  countryname:"Japan",
  address:"Tokyo",
  building:"Eifel Tower",
},]

function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="lg">
      
      
      <Closinglist closing={closing}/>

   

      <center><div className="seperator"></div></center>
      
      <Explorelist country={country}/>
      </Container>
      <ImageList closed={Closed}/>

      <Container maxWidth="lg"><Alllist all={all} /></Container>
      
      
    </div>
  );
}

export default App;
