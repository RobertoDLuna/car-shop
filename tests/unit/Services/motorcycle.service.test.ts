import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import MotorcycleService from '../../../src/Services/motorcycle.service';

describe('Teste da camada service de motorcycles', function () {
  const motorcycle = {
    id: '6376e8103670dd5561175690',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30,
    category: 'Street',
    engineCapacity: 600,
  };
  const reqBody = {
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  };
  it('Testa se adiciona uma moto com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(motorcycle);

    const service = new MotorcycleService();
    const result = await service.create(reqBody);

    expect(result).to.be.deep.equal(motorcycle);
  });
  it('Testa se busca uma moto por ID com sucesso', async function () {
    sinon.stub(Model, 'findById').resolves(motorcycle);

    const service = new MotorcycleService();
    const result = await service.findById('6376e8103670dd5561175690');

    expect(result).to.be.deep.equal(motorcycle);
  });
  it('Testa se busca todos os veículos com sucesso', async function () {
    const motorCycles = [motorcycle];

    sinon.stub(Model, 'find').resolves(motorCycles);

    const service = new MotorcycleService();
    const result = await service.getAll();

    expect(result).to.be.deep.equal(motorCycles);
  });
});