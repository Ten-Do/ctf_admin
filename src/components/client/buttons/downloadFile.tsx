'use client'

import { download } from '@/utils/files/downloadFile'

export const DownloadButton = ({
  task_file_name,
  children,
}: {
  task_file_name: string
  children: React.ReactNode
}): JSX.Element => {
  return (
    <button
      className='btn accent'
      onClick={() =>
        download(task_file_name).then((data) => {
          if (!data) return
          const url = window.URL.createObjectURL(data),
            anchor = document.createElement('a')
          anchor.href = url
          anchor.download = task_file_name || 'Пояснение к задаче'
          anchor.click()

          window.URL.revokeObjectURL(url)
          // document.removeChild(anchor)
        })
      }
    >
      {children}
    </button>
  )
}
