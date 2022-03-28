import React from 'react'
import { NavBar, SearchBar } from 'antd-mobile'
import { SendOutline, CloseOutline } from 'antd-mobile-icons'

function McNavBar() {
  return (
    <>
      <NavBar
        style={{
          '--height': '2.25rem',
          '--border-bottom': '0.06rem #eee solid',
          'backgroundColor': '#fff',
        }}
        backArrow={<CloseOutline fontSize={18} />}
        right={<SendOutline fontSize={18} />}
      >
        <SearchBar
          placeholder='请输入内容'
        />
      </NavBar>
    </>
  )
}

export default McNavBar