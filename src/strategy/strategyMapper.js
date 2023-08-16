import { CreditoStrategy } from './creditoStrategy.js'
import { DinheiroStrategy } from './dinheiroStrategy.js'
import { DebitoStrategy } from './debitoStrategy.js'

const StrategyMapper = {
    'dinheiro': DinheiroStrategy,
    'credito': CreditoStrategy,
    'debito': DebitoStrategy
}
export { StrategyMapper };
