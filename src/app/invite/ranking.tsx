import Image from 'next/image'

import bronze from '../../assets/medal-bronze.svg'
import gold from '../../assets/medal-gold.svg'
import silver from '../../assets/medal-silver.svg'

export function Ranking() {
  return (
    <div className="w-full masx-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Bruno
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image
            src={gold}
            alt="medalha de ouro"
            className="absolute top-0 right-8"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2º</span> | Marco
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            765
          </span>

          <Image
            src={silver}
            alt="medalha de prata"
            className="absolute top-0 right-8"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3º</span> | Ana
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            562
          </span>

          <Image
            src={bronze}
            alt="medalha de bronze"
            className="absolute top-0 right-8"
          />
        </div>
      </div>
    </div>
  )
}
