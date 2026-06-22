import { css } from "styled-components";

export const typography = {
  display: {
    m: css`
      font-size: var(--display-m);
      line-height: var(--lh-display-m);
      font-weight: var(--weight-bold);
    `,
    s: css`
      font-size: var(--display-s);
      line-height: var(--lh-display-s);
      font-weight: var(--weight-bold);
    `,
  },
  title: {
    l: css`
      font-size: var(--title-l);
      line-height: var(--lh-title-l);
      font-weight: var(--weight-bold);
    `,
    m: css`
      font-size: var(--title-m);
      line-height: var(--lh-title-m);
      font-weight: var(--weight-bold);
    `,
    s: css`
      font-size: var(--title-s);
      line-height: var(--lh-title-s);
      font-weight: var(--weight-bold);
    `,
  },
  body: {
    l_bold: css`
      font-size: var(--body-l);
      line-height: var(--lh-body-l);
      font-weight: var(--weight-bold);
    `,
    l_semibold: css`
      font-size: var(--body-l);
      line-height: var(--lh-body-l);
      font-weight: var(--weight-semibold);
    `,
    l_regular: css`
      font-size: var(--body-l);
      line-height: var(--lh-body-l);
      font-weight: var(--weight-regular);
    `,

    m_bold: css`
      font-size: var(--body-m);
      line-height: var(--lh-body-m);
      font-weight: var(--weight-bold);
    `,
    m_semibold: css`
      font-size: var(--body-m);
      line-height: var(--lh-body-m);
      font-weight: var(--weight-semibold);
    `,
    m_regular: css`
      font-size: var(--body-m);
      line-height: var(--lh-body-m);
      font-weight: var(--weight-regular);
    `,
    m_regular_reading: css`
      font-size: var(--body-m-reading);
      line-height: var(--lh-body-m-reading);
      font-weight: var(--weight-regular);
    `,
    m_underline: css`
      font-size: var(--body-m);
      line-height: var(--lh-body-m);
      font-weight: var(--weight-regular);
      text-decoration: underline;
    `,
    m_strikethrough: css`
      font-size: var(--body-m);
      line-height: var(--lh-body-m);
      font-weight: var(--weight-regular);
      text-decoration: line-through;
    `,

    s_bold: css`
      font-size: var(--body-s);
      line-height: var(--lh-body-s);
      font-weight: var(--weight-bold);
    `,
    s_semibold: css`
      font-size: var(--body-s);
      line-height: var(--lh-body-s);
      font-weight: var(--weight-semibold);
    `,
    s_regular: css`
      font-size: var(--body-s);
      line-height: var(--lh-body-s);
      font-weight: var(--weight-regular);
    `,
    s_regular_reading: css`
      font-size: var(--body-s-reading);
      line-height: var(--lh-body-s-reading);
      font-weight: var(--weight-regular);
    `,
    s_underline: css`
      font-size: var(--body-s);
      line-height: var(--lh-body-s);
      font-weight: var(--weight-regular);
      text-decoration: underline;
    `,
    s_strikethrough: css`
      font-size: var(--body-s);
      line-height: var(--lh-body-s);
      font-weight: var(--weight-regular);
      text-decoration: line-through;
    `,
  },
  caption: {
    m_bold: css`
      font-size: var(--caption-m);
      line-height: var(--lh-caption-m);
      font-weight: var(--weight-bold);
    `,
    m_semibold: css`
      font-size: var(--caption-m);
      line-height: var(--lh-caption-m);
      font-weight: var(--weight-semibold);
    `,
    m_regular: css`
      font-size: var(--caption-m);
      line-height: var(--lh-caption-m);
      font-weight: var(--weight-regular);
    `,
    s_bold: css`
      font-size: var(--caption-s);
      line-height: var(--lh-caption-s);
      font-weight: var(--weight-bold);
    `,
    s_semibold: css`
      font-size: var(--caption-s);
      line-height: var(--lh-caption-s);
      font-weight: var(--weight-semibold);
    `,
    s_regular: css`
      font-size: var(--caption-s);
      line-height: var(--lh-caption-s);
      font-weight: var(--weight-regular);
    `,
  },
};
