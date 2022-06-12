import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

it('deve garantir que 1 + 8 = 9', inject ([CalculadoraService],(service: CalculadoraService)=> {
  let soma = service.calcular(1,8,CalculadoraService.SOMA);
  expect(soma).toEqual(9);
}));

it('deve garantir que 8 - 8 = 0', inject ([CalculadoraService],(service: CalculadoraService)=> {
  let subtracao = service.calcular(8,8,CalculadoraService.SUBTRACAO);
  expect(subtracao).toEqual(0);
}));

it('deve garantir que 3 * 8 = 24', inject ([CalculadoraService],(service: CalculadoraService)=> {
  let multiplicacao = service.calcular(3,8,CalculadoraService.MULTIPLICACAO);
  expect(multiplicacao).toEqual(24);
}));

it('deve garantir que 24 / 8 = 3', inject ([CalculadoraService],(service: CalculadoraService)=> {
  let divisao = service.calcular(24,8,CalculadoraService.DIVISAO);
  expect(divisao).toEqual(3);
}));

