import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { BadgeCheck, Copy, Link, Medal, MousePointerClick } from 'lucide-react'
import Image from 'next/image'
import logo from '../../assets/logo.svg'
import { InviteLinkInput } from './invite-link-input'
import { Ranking } from './ranking'

export default function InvitePage() {
  const inviteLink = 'http://localhost:3000/invite/843567125'

  return (
    <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
      <div className="flex flex-col gap10 w-full max-w-[550px]">
        <Image src={logo} alt="devstage" width={108.5} height={30} />

        <div className="space-y-2">
          <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
            Inscrição confirmada!
          </h1>
          <p className="text-gray-300">
            Para entrar no evento, acesse o link enviado para seu e-mail.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none ">
              Indique e ganhe
            </h2>
            <p>
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>

          <InviteLinkInput inviteLink={inviteLink} />

          <div className="grid gap-3 md:grid-cols-3">
            <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl-">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                1042
              </span>
              <span className="text-sm text-gray-300 leading-none text-center">
                Acessos ao link
              </span>
              <MousePointerClick className="size-5 text-purple absolute left-3 top-3" />
            </div>

            <div className=" relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl-">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                231
              </span>
              <span className="text-sm text-gray-300 leading-none text-center">
                Inscriçôes feitas
              </span>
              <BadgeCheck className="size-5 text-purple absolute left-3 top-3" />
            </div>

            <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl-">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                3º lugar
              </span>
              <span className="text-sm text-gray-300 leading-none text-center">
                Posição no ranking
              </span>
              <Medal className="size-5 text-purple absolute left-3 top-3" />
            </div>
          </div>
        </div>
      </div>

      <Ranking />
    </div>
  )
}
