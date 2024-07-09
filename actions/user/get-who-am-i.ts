'use server'

import { isBaseError } from '@/lib/utils'
import { auth } from '@clerk/nextjs/server'

import { SERVER_URL } from '@/constants/env-config'

export const getCurrentUser = async () => {
  try {
    const { getToken } = auth()
    const currentUser = await fetch(`${SERVER_URL}/api/users/who-am-i`, {
      headers: {
        Authorization: `Bearer ${await getToken()}`
      }
    }).then((res) => res.json())
    return currentUser
  } catch (error) {
    let messageError = ''
    if (!isBaseError(error) || error.statusCode === 500) {
      messageError = 'Something went wrong'
    } else {
      messageError = error.message
    }

    throw new Error(messageError)
  }
}
