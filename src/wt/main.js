import { Worker } from 'worker_threads'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { cpus } from 'os'

const __dirname = dirname(fileURLToPath(import.meta.url))
const workerPath = join(__dirname, 'worker.js')

const performCalculations = async () => {
  const cores = cpus()
  const results = []
  const res = await Promise.allSettled(
    cores.map(
      (_, i) =>
        new Promise((resolve, reject) => {
          const n = 10 + i
          const worker = new Worker(workerPath, {
            workerData: n,
          })
          worker.on('message', (message) => {
            results.push({ status: 'resolved', data: message.result })
            resolve(message)
          })
          worker.on('error', (message) => {
            reject(message)
          })
        })
    )
  )

  for (const { status, value } of res) {
    console.log({
      status: status === 'fulfilled' ? 'resolved' : 'error',
      data: value || null,
    })
  }
}

await performCalculations()
