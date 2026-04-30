import { motion } from 'framer-motion'

import DocsHeader from '../components/layout/DocsHeader'
import DocsSidebar from '../components/layout/DocsSidebar'
import SiteFooter from '../components/layout/SiteFooter'

function DocsLayout({
  activeTopLabel,
  activeSidebarKey,
  showSupport = false,
  contentClassName = 'max-w-4xl mx-auto',
  sectionPaddingClassName = 'px-8 md:px-16 py-12 lg:py-20',
  footerVariant = 'brandLeft',
  children,
}) {
  return (
    <div className="min-h-screen bg-[#030712]">
      <DocsHeader
        activeLabel={activeTopLabel}
        sidebarActiveKey={activeSidebarKey}
      />

      <div className="mx-auto flex max-w-[1440px]">
        <DocsSidebar activeKey={activeSidebarKey} showSupport={showSupport} />
        <main className={`min-w-0 flex-1 ${sectionPaddingClassName}`}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={contentClassName}
          >
            {children}
          </motion.div>
        </main>
      </div>

      <SiteFooter variant={footerVariant} />
    </div>
  )
}

export default DocsLayout
