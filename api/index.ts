import { OrderService } from '@/api/services/OrderService'
import { AuthService } from '@/api/services/AuthService'
import { DepositService } from '@/api/services/DepositService'

export default { ...AuthService, ...OrderService, ...DepositService }