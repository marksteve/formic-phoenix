defmodule Formic.FormController do
  use Formic.Web, :controller

  def new(conn, _params) do
    render conn, "new.html"
  end
end
