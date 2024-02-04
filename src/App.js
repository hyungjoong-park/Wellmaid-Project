
import React, {Component } from 'react';
import logo from './logo.svg';
import BsnCustomer from './components/BsnCustomer'
import './App.css';

const bsncust = [{
  'seq': 1,
  'image': 'https://picsum.photos/64/64/?image=1',
  'bsnno': '1050718143',
  'bsnname': '웰메이드닷컴',
  'bsnperson': '박형중',
  'telno': '01032111236',
  'bsnpost': '05791',
  'bsnbasicaddr': '서울특별시 송파구 위례송파로 40',
  'bsndetailaddr': '1206동 101호',
  'bsnstatecd': '1:정상',
  'tradesalecnt': 10,
  'tradebuycnt': 2,
  'outsourcingsalecnt': 5,
  'outsourcingbuycnt': 3,
  'delyn': 'N',
  'regdate': '2021-08-30 22:51:12 123',
  'uptdate': '2021-08-30 22:51:12 123'
},
{
  'seq': 2,
  'image': 'https://picsum.photos/64/64/?image=2',
  'bsnno': '1050718143',
  'bsnname': '웰메이드닷컴',
  'bsnperson': '박형중',
  'telno': '01032111236',
  'bsnpost': '05791',
  'bsnbasicaddr': '서울특별시 송파구 위례송파로 40',
  'bsndetailaddr': '1206동 101호',
  'bsnstatecd': '1:정상',
  'tradesalecnt': 10,
  'tradebuycnt': 2,
  'outsourcingsalecnt': 5,
  'outsourcingbuycnt': 3,
  'delyn': 'N',
  'regdate': '2021-08-30 22:51:12 123',
  'uptdate': '2021-08-30 22:51:12 123'
},
{
  'seq': 3,
  'image': 'https://picsum.photos/64/64/?image=3',
  'bsnno': '1050718143',
  'bsnname': '웰메이드닷컴',
  'bsnperson': '박형중',
  'telno': '01032111236',
  'bsnpost': '05791',
  'bsnbasicaddr': '서울특별시 송파구 위례송파로 40',
  'bsndetailaddr': '1206동 101호',
  'bsnstatecd': '1:정상',
  'tradesalecnt': 10,
  'tradebuycnt': 2,
  'outsourcingsalecnt': 5,
  'outsourcingbuycnt': 3,
  'delyn': 'N',
  'regdate': '2021-08-30 22:51:12 123',
  'uptdate': '2021-08-30 22:51:12 123'
}
]
class App extends Component {
  render () {
    return (
      <div>
          {
            bsncust.map(c => {
              return (
                <BsnCustomer
                  seq={c.seq}
                  image={c.image}
                  bsnno={c.bsnno}
                  bsnname={c.bsnname}
                  bsnperson={c.bsnperson}
                  telno={c.telno}
                  bsnpost={c.bsnpost}
                  bsnbasicaddr={c.bsnbasicaddr}
                  bsndetailaddr={c.bsndetailaddr}
                  bsnstatecd={c.bsnstatecd}
                  tradesalecnt={c.tradesalecnt}
                  tradebuycnt={c.tradebuycnt}
                  outsourcingsalecnt={c.outsourcingsalecnt}
                  outsourcingbuycnt={c.outsourcingbuycnt}
                  delyn={c.delyn}
                  regdate={c.regdate}
                  uptdate={c.uptdate}
                />
              );
            })
          }
      </div>
    );
  }
}

export default App;
