export type PinSignalInfo =
  | {
      type: 'i2c';
      signal: 'SDA' | 'SCL';
      bus?: number;
    }
  | {
      type: 'spi';
      signal: 'SCK' | 'MOSI' | 'MISO' | 'SS';
      bus?: number;
    }
  | {
      type: 'usart';
      signal: 'RX' | 'TX';
      bus?: number;
    }
  | {
      type: 'power';
      signal: 'GND' | 'VCC';
      voltage?: number;
    }
  | {
      type: 'pwm';
    }
  | {
      type: 'analog';
      channel?: number;
    };

export interface ElementPin {
  /**
   * A name that uniquely identifies the pin, e.g. `GND` or `VCC`.
   * Pins that are connected internally must have the same name prefix, followed by a single dot,
   * and a unique suffix (e.g. `GND.1` and `GND.2`).
   */
  name: string;

  /** The x-coordinate of the pin, relative to the element's origin */
  x: number;

  /** The y-coordinate of the pin, relative to the element's origin */
  y: number;

  /** The signals for this pin. Leave empty for generic pins without a designated signals. **/
  signals: PinSignalInfo[];

  /**
   * Optional pin description
   */
  description?: string;
}

/** Helper function for creating analog PinSignalInfo objects */
export const analog = (channel: number) => ({ type: 'analog', channel } as PinSignalInfo);