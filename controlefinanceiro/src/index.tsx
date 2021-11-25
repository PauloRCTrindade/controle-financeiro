import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
	models: {
		transaction: Model,
	},

	seeds(server) {
	 server.db.loadData({
		 transactions: [
			 {
				 id:1,
				 title:'freelance website',
				 type: 'deposit',
				 categoty:'Dev',
				 amount: 6000,
				 createdAt: new Date('2021-02-12 09:00:00')
			 },
			 {
				id:2,
				title:'freelance website',
				type: 'deposit',
				categoty:'Dev',
				amount: 3000,
				createdAt: new Date('2021-07-12 09:00:00')
			},
			{
				id:3,
				title:'freelance website',
				type: 'withdraw',
				categoty:'Dev',
				amount: 5000,
				createdAt: new Date('2021-01-12 09:00:00')
			}
		 ]
	 })		
},

	routes() {
		this.namespace = 'api';

		this.get('/transactions', ()=> {
			return this.schema.all('transaction')
		})

		this.post('/transactions', (schema,request) => {
			const data = JSON.parse(request.requestBody)

			return schema.create('transactiion',data);
		})
	}
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


