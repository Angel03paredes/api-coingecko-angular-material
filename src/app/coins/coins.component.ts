import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Coin {
  id:String,
  name:string,
  symbol:string,
  image:string,
  current_price:number,
  price_change_percentage_24h:number,
  total_volume:number,
  market_cap_rank:number
}

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css'],
})



export class CoinsComponent implements OnInit {

  displayedColumns : any[] = ['id','coin','price','volume'];

  value = "";

  

Coins: Coin[] = []
filterCoins : Coin[] = []

  URL =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';


    search(event:any){
      this.filterCoins = this.Coins.filter((coin)=>
        coin.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(event.target.value.toLowerCase()) 
      )
    }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Coin[]>(this.URL).subscribe(
      (resp) => {
        this.Coins = resp;
        this.filterCoins = resp;
        
      },
      (err) => console.log(err)
    );
  }
}
