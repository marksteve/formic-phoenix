defmodule Formic.FormTest do
  use Formic.ModelCase

  alias Formic.Form

  @valid_attrs %{name: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Form.changeset(%Form{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Form.changeset(%Form{}, @invalid_attrs)
    refute changeset.valid?
  end
end
