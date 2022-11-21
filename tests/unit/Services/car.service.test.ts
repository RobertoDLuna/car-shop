import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/car.service';

describe('Testes da camada service de car', function () {
  it('Testa se adiciona um veículo com sucesso', async function () {
    const car = {
      id: '6376d2999c9859ed6998d48c',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };
      
    const reqBody = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
      
    sinon.stub(Model, 'create').resolves(car);

    const service = new CarService();
    const result = await service.create(reqBody);

    expect(result).to.be.deep.equal(car);
  });

  it('Testa se busca um veículo por ID', async function () {
    const car = {
      id: '6376d2999c9859ed6998d48c',
      model: 'mariaaa',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12,
      doorsQty: 2,
      seatsQty: 5,
    };

    sinon.stub(Model, 'findOne').resolves(car);

    const service = new CarService();
    const result = await service.findById('6376d2999c9859ed6998d48c');

    expect(result).to.be.deep.equal(car);
  });

  it('Testa se busca todos os carros com sucesso', async function () {
    const car = [{
      id: '6376d2999c9859ed6998d48c',
      model: 'mariaaa',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12,
      doorsQty: 2,
      seatsQty: 5,
    }];
    sinon.stub(Model, 'find').resolves(car);

    const service = new CarService();
    const result = await service.getAll();

    expect(result).to.be.deep.equal(car);
  });
});