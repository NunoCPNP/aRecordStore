import { getCount } from '@/shared/services/getCount'

import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const res = await request.json()

  try {
    const count = await getCount(res.category)

    return Response.json(count)
  } catch (error) {
    console.log('count route error', error)
  }
}
