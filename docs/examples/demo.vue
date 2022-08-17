<template>
  <el-card class="container">
    <el-container>
      <el-main>
        <div class="component">
          <component :is="comp"></component>
        </div>
        <el-collapse
          v-model="activeNames"
          @change="handleChange('1')"
          accordion
        >
          <el-collapse-item name="1">
            <template #title>
              <div class="look-code" v-if="!expand">
                查看源代码<el-icon><CaretBottom /></el-icon>
              </div>
              <div class="tooltip" @click.stop="copyHandler">
                <el-tooltip effect="dark" placement="bottom" content="复制代码">
                  <svg
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    width="16px"
                    height="16px"
                  >
                    <path
                      fill="currentColor"
                      d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z"
                    ></path>
                  </svg>
                </el-tooltip>
              </div>
            </template>
            <div class="example">
              <slot></slot>
            </div>
            <div class="el-collapse-item__header">
              <div @click="handleChange('')" class="look-code" v-if="expand">
                隐藏源代码<el-icon><CaretTop /></el-icon>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-main>
    </el-container>
  </el-card>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { ElMessage } from "element-plus"
import { CaretBottom, CaretTop } from "@element-plus/icons-vue"
import { useClipboard } from "@vueuse/core"
// import { usePages } from 'vuepress-plugin-use-pages'
const { isSupported, copy } = useClipboard()

export default defineComponent({
  components: { CaretBottom, CaretTop },
  props: {
    rawSource: {
      type: String,
      default: "",
    },
    comp: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      activeNames: "",
      expand: false,
    }
  },
  computed: {
    sourceCode() {
      return decodeURIComponent(this.rawSource)
    },
  },
  methods: {
    async copyHandler() {
      if (!isSupported) {
        ElMessage.error("不支持复制")
      } else {
        await copy(this.sourceCode)
        ElMessage.success("已复制！")
      }
    },
    async handleChange(activeNames) {
      await this.$nextTick()
      this.activeNames = activeNames
      setTimeout(() => {
        this.expand = this.activeNames === "1"
      }, 250)
    },
  },
})
</script>
<style lang="scss">
.page .theme-default-content {
  padding: 24px;
  margin: 30px;
  max-width: 800px;
}
.page-meta {
  margin: 0 30px;
  padding: 0 24px;
  max-width: 800px;
}
.description {
  margin: 16px 0;
}
.container {
  background-color: var(--el-bg-color);
  border-color: var(--c-border);
  table {
    margin: 0;
    tr,
    td,
    th {
      border: none;
    }
  }
  .look-code {
    flex: 1;
    text-align: center;
    font-size: 14px;
    line-height: 24px;
    &:hover {
      color: #409eff;
    }
    .el-icon {
      vertical-align: middle;
      margin-left: 8px;
    }
  }
  .example {
    padding: 16px;
    padding-bottom: 24px;
    background-color: var(--code-bg-color);
    font-size: 16px;
    p:last-child {
      display: none;
    }
  }
  .component {
    padding: 24px;
  }
  .el-card__body {
    padding: 0;
  }
  .el-main {
    // padding: 24px;
    padding: 0;
  }
  .el-collapse {
    border: none;
  }
  .el-collapse-item__wrap {
    border: none;
    background-color: var(--c-bg);
  }
  .el-collapse-item__arrow {
    display: none;
  }
  .el-collapse-item__header {
    height: 24px;
    padding: 8px;
    margin: 0;
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid var(--c-border);
    border-bottom: none;
    background-color: var(--c-bg);
    cursor: pointer;
    color: #909399;
    transition: 0.2s;
    .tooltip {
      line-height: 24px;
      padding: 8px 16px 8px 8px;
      margin-right: -8px;
    }
    .el-tooltip__trigger {
      position: relative;
      top: 4px;
    }
  }
  .el-collapse-item__content {
    padding-bottom: 0;
  }
  .el-collapse-item:last-child {
    margin: 0;
  }
  pre {
    padding: 4px;
    margin: 0;
  }
  .token.tag,
  .token.builtin {
    color: #3182bd;
  }
  .token.attr-name,
  .token.property,
  .token.entity {
    color: #717c11;
  }
  .token.atrule,
  .token.attr-value,
  .token.selector {
    color: #0b8235;
  }
}
</style>
