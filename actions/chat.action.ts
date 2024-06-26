'use server'

import { auth, currentUser } from '@clerk/nextjs/server'

export const getHubs = async () => {
  const { getToken } = auth()
}
