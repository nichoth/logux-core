import { Connection } from '../base-node/index.js'

interface ReconnectOptions {
  /**
   * Maximum reconnecting attempts.
   */
  attempts?: number

  /**
   * Maximum delay between re-connecting.
   */
  maxDelay?: number

  /**
   * Minimum delay between re-connecting.
   */
  minDelay?: number
}

/**
 * Wrapper for Connection for re-connecting it on every disconnect.
 *
 * ```js
 * import { ClientNode, Reconnect } from '@logux/core'
 * const recon = new Reconnect(connection)
 * new ClientNode(nodeId, log, recon, options)
 * ```
 */
export class Reconnect extends Connection {
  /**
   * Fails attempts since the last connected state.
   */
  attempts: number

  /**
   * Are we in the middle of connecting.
   */
  connecting: boolean

  /**
   * Wrapped connection.
   */
  connection: Connection

  /**
   * Unbind all listeners and disconnect. Use it if you will not need
   * this class anymore.
   */
  destroy: () => void

  /**
   * Re-connection options.
   */
  options: ReconnectOptions

  /**
   * Should we re-connect connection on next connection break.
   * Next `connect` call will set to `true`.
   *
   * ```js
   * function lastTry () {
   *   recon.reconnecting = false
   * }
   * ```
   */
  reconnecting: boolean

  /**
   * @param connection The connection to be re-connectable.
   * @param options Re-connection options.
   */
  constructor(connection: Connection, options?: ReconnectOptions)
}
